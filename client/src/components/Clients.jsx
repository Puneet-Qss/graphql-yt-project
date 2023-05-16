import React from "react";
import { GET_CLIENTS } from "../queries/clientQueries";
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import ClientRow from "../components/ClientRow";



function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return(<Spinner/>)
  if (error) return <p>Something went wrong.</p>;


  return (
    <>
      {
      
      (
        !loading && !error) ? (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>            
            </tr>
          </thead>
          <tbody>
            {
            data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))
            }
          </tbody>
        </table>
      ) : <p>Oop's Something went Wrong</p>}
    </>
  );
}

export default Clients;
