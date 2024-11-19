import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jwhbyupgrwpavznratlz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3aGJ5dXBncndwYXZ6bnJhdGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMjgzMTUsImV4cCI6MjA0NzYwNDMxNX0.dO4ZAZd4znCmQce0Sf61Ou3vuKL9HBko_tuTYipSCVc";

console.log("Supabase URL:", supabaseUrl); // Debugging log
console.log("Supabase Anon Key:", supabaseAnonKey); // Debugging log

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase credentials");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchProblemDetails = async (problemId) => {
  const { data, error } = await supabase
    .from("problem_details")
    .select("*")
    .eq("problem_id", problemId)
    .single();

  if (error) {
    console.error("Error fetching problem details:", error);
    return null;
  }
  return data;
};

export const saveProblemDetails = async (problemId, details) => {
  const { data, error } = await supabase
    .from("problem_details")
    .upsert({
      problem_id: problemId,
      description: details.description,
      code: details.code,
      image_url: details.imageUrl,
    })
    .select();

  if (error) {
    console.error("Error saving problem details:", error);
    return null;
  }
  return data[0];
};

export const uploadProblemImage = async (file, problemId) => {
  const fileExt = file.name.split(".").pop();
  const fileName = `problem_${problemId}_${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from("problem_images")
    .upload(filePath, file);

  if (error) {
    console.error("Image upload error:", error);
    return null;
  }

  return supabase.storage.from("problem_images").getPublicUrl(filePath).data
    .publicUrl;
};
