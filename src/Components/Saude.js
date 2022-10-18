import React from "react";
import BannerSaude from "../images/BannerSaude.png"
import * as S from "../styles/OBSStyled.js"

const Saude = () => {
  return(
    <S.containerInformation>
        <img src={BannerSaude} alt=""/>
        <S.textOBS>
            <h3>UNESCO 914BRZ1045 Implementation of education innovative technologies for prevention of STD / HIV / AIDS in the state of Rio de Janeiro</h3>
            <p>The objective of this Cooperation Agreement is to apply innovative methodologies in the field of preventive education and communication on HIV / AIDS, support and encourage research and studies in different fields on HIV / AIDS to support public policies formulation and decision-making management.</p>
            <h3>UNAIDS Community-led actions to eliminate HIV-related stigma and discrimination in health services.</h3>
            <p>Through a "UN to UN Agreement", UNDP provided funds raised at the national level to UNAIDS to support efforts to fill the gaps reflected in the national data published in the HIV/AIDS Epidemiological Bulletin. UNAIDS, in its role as an implementing organization, has assumed responsibility for managing financial resources, communicating, evaluating and monitoring UN to UN actions to ensure that results and findings are incorporated into local HIV response processes.</p>
            <h3>UNAIDS PAHO/WHO UNODC ILO UNESCO Country Envelope</h3>
            <p>Resources earmarked for activities implemented by cosponsors at the national level are funded with a country envelope, adjusted according to the programmed activities in line with each agency's mandate. Ministry of Health 2021 HIV priorities: Priority 1: Reduce the mortality of people living with HIV and TB-HIV co-infection; Priority 2: Expand and strengthen the diagnosis and treatment of STIs, tuberculosis and leprosy; Priority 3: Reduce vertical transmission of syphilis and hepatitis B and eliminate vertical transmission of HIV; Priority 5: Expand access to health promotion and prevention actions for the most vulnerable populations; Priority 6: Foster scientific and technological development to fight leprosy; Priority 7: Qualify Management and Governance</p>
            <h3>UNAIDS By 2025, 95% of people living with, at risk of and affected by HIV obtain equitable access and reap equitable benefits from HIV prevention, treatment, care and support services.</h3>
            <p>Combination prevention - HIV prevention 2020 Road Map and Strategic Agenda for Key Populations implemented in the country and national capacities strengthened for the achievement of the Global Prevention Coalition Commitment</p>
            <h3>UNICEF - WASH activities</h3>
            <p>Work closely with network of corporate partners to source and deliver hygiene kits and targeted communication to vulnerable families in poor urban neighborhoods in Brazilian capital cities in response of the COVID-19 Pandemic</p>
        </S.textOBS>
    </S.containerInformation>
  )
}

export default Saude