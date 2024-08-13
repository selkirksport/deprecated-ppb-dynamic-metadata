export const config = {
  domainSource: "https://www.playpickleball.com", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/instructor/[^/]+",
          metaDataEndpoint: "https://alvuagzviphwrdjreldb.supabase.co/functions/v1/teacher-metadata?slug_input={slug_input}"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
