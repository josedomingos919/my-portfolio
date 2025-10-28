import React from "react";

const TeamDetailPage = async ({ params }) => {
  const response = await params;

  console.log(response);

  return <div className="text-white text-5xl">Teste {response.name} </div>;
};

export default TeamDetailPage;
