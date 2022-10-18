import React from "react";
import BannerPobreza from "../images/BannerPobreza.png"
import * as S from "../styles/OBSStyled.js"

const Pobreza = () => {
  return(
  <S.containerInformation>
    <img src={BannerPobreza} alt=""/>
    <S.textOBS>
      <h3>UNDRR - "Making Cities Resilient 2030" - Vertical Articulation strategies with subnational governments for disaster resilience policies at the local level (SP, RJ, RN, MG, SC)</h3>
      <p>Partnership with State Departments of Civil Protection and Defence (SP, RJ, RN, MG, SC) for the implementation of the Sendai Framework for Disaster Risk Reduction 2015-2030 at the local level, including joint technical assistance to Brazilian municipal governments in areas of: knowledge production, capacity-building, local resilience assessments, and elaboration of local resilience plan. The partnership is formalised by States' registering to the Making Cities Resilient 2030 initiative.</p>
      <h3>IOM IS.0028 Economic Integration of Vulnerable Nationals from Venezuela and other Neighbouring Countries In Brazil</h3>
      <p>This action aims to contribute to the economic integration of vulnerable nationals from Venezuela and other neighbouring countries in Brazil by ensuring access to sustainable livelihoods and employment opportunities, fostering their long-term integration and self-reliance in their host communities.</p>
      <h3>UNICEF - Programme Monitoring and Evaluation & Evidence Generation</h3>
      <p>UNICEF utilizes guidance, tools and resources to effectively influence the design, implementation, monitoring, evaluation and dissemination of development policies and programmes that promote, guarantee and impact children’s rights.</p>
      <h3>UNICEF - Knowledge and evidence & Social Policy</h3>
      <p>Improved evidence based policies to address the causes of exclusion of boys and girls and strengtehn social protection systems.</p>
      <h3>UNICEF - Intersectoral policies for Children & Adolescents</h3>
      <p>Government at national and subnational levels has improved capacity to implement intersectoral policies for social protection with emphasis on the most vulnerable children.</p>
    </S.textOBS>
  </S.containerInformation>
  )
}

export default Pobreza