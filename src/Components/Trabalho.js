import React from "react";
import BannerTrabalho from "../images/BannerTrabalho.png"
import * as S from "../styles/OBSStyled.js"

const Trabalho = () => {
  return(
    <S.containerInformation>
        <img src={BannerTrabalho} alt=""/>
        <S.textOBS>
            <h3>UNAIDS PAHO/WHO UNODC ILO UNESCO Country Envelope</h3>
            <p>Resources earmarked for activities implemented by cosponsors at the national level are funded with a country envelope, adjusted according to the programmed activities in line with each agency's mandate. Ministry of Health 2021 HIV priorities: Priority 1: Reduce the mortality of people living with HIV and TB-HIV co-infection; Priority 2: Expand and strengthen the diagnosis and treatment of STIs, tuberculosis and leprosy; Priority 3: Reduce vertical transmission of syphilis and hepatitis B and eliminate vertical transmission of HIV; Priority 5: Expand access to health promotion and prevention actions for the most vulnerable populations; Priority 6: Foster scientific and technological</p>
            <h3>IOM IS.0028 Economic Integration of Vulnerable Nationals from Venezuela and other Neighbouring Countries In Brazil</h3>
            <p>This action aims to contribute to the economic integration of vulnerable nationals from Venezuela and other neighbouring countries in Brazil by ensuring access to sustainable livelihoods and employment opportunities, fostering their long-term integration and self-reliance in their host communities.</p>
            <h3>UNICEF - Participation of excluded children and adolescents</h3>
            <p>Boys, girls and families from excluded populations with increased participation in institutional fora, knowledge and skills to demand their rights.</p>
            <h3>UNICEF - Intersectoral policies for Children & Adolescents</h3>
            <p>Government at national and subnational levels has improved capacity to implement intersectoral policies for social protection with emphasis on the most vulnerable children.</p>
            <h3>UNICEF - Non financial contributions (Business for Results)</h3>
            <p>Increased non-financial contributions from individual donors, private and public sector partners for the realization of boys’ and girls’ rights.</p>
        </S.textOBS>
    </S.containerInformation>
  )
}

export default Trabalho