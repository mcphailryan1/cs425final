import { React, useMemo, useState } from "react";
import axios from "axios";
import Icon1 from "../../Images/person1.jpeg";
import Icon2 from "../../Images/person2.jpeg";
import Icon3 from "../../Images/person3.jpeg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Icon,
} from "./agentsectionelements";

const icons = [Icon1, Icon2, Icon3];

const Agents = () => {
  const [agents, setAgents] = useState();
  useMemo(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/agents");
      setAgents(response.data);
    };
    fetchData();
  }, [setAgents]);
  console.log(agents);
  return agents ? (
    <ServicesContainer>
      <ServicesH1>Available Agents</ServicesH1>
      <ServicesWrapper>
        {agents.map((x, index) => {
          return (
            <ServicesCard key={index}>
              <ServicesIcon src={icons[index % icons.length]} />
              <ServicesH2>{x.agName}</ServicesH2>
              <ServicesP>{x.agEmail}</ServicesP>
              <Icon>Click here for their listing info</Icon>
            </ServicesCard>
          );
        })}
      </ServicesWrapper>
    </ServicesContainer>
  ) : null;
};

export default Agents;
