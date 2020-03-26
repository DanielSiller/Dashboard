import React from "react";

import useQuery from "../hooks/useQuery";
import Header from "../Components/Header";

import {
  CardContainer,
  Card,
  OverviewContainer,
  Label,
  ImagensContainer
} from "../Components/Card";
import { Container, Body } from "../Components/Container";

export default function LIOP() {
  const query = useQuery();
  return (
    <Container>
      <Header name="LIOP" unidade="VIX" date="24/03/2020" />
      <Body>
        <CardContainer
          position="absolute"
          gridTemplateColumns="100% 100%"
          border="none"
          shadow="none"
          gap="23"
          marginTop="110"
        >
          <OverviewContainer>
            <Label fontweight="bold" marginbottom="20" fontsize="16">
              Supply Chain <Label fontsize="14">- Visão Geral 30 dias</Label>
            </Label>

            <ImagensContainer>
              <Card>
                <img
                  src="https://image.flaticon.com/icons/svg/869/869134.svg"
                  alt="empreparacao"
                  class="img"
                />
                <Label color="000" marginTop="10" fontweight="bold">
                  {query.get("in_preparation")}
                </Label>
                <Label color="000" marginTop="10">
                  Em Preparação
                </Label>
              </Card>
              <img
                src="https://image.flaticon.com/icons/svg/467/467280.svg"
                alt="rightarrow"
                class="arrow"
              />
              <Card>
                <img
                  src="https://image.flaticon.com/icons/svg/287/287590.svg"
                  alt="emtransferencia"
                  class="img"
                />
                <Label color="000" marginTop="10" fontweight="bold">
                  {query.get("in_transit")}
                </Label>
                <Label color="000" marginTop="10">
                  Em Transferência
                </Label>
              </Card>
              <img
                src="https://image.flaticon.com/icons/svg/467/467280.svg"
                alt="rightarrow"
                class="arrow"
              />
              <Card>
                <img
                  src="https://image.flaticon.com/icons/svg/1261/1261055.svg"
                  alt="nabase"
                  class="img"
                />
                <Label color="000" marginTop="10" fontweight="bold">
                  {query.get("on_base")}
                </Label>
                <Label color="000" marginTop="10">
                  Na Base
                </Label>
              </Card>
              <img
                src="https://image.flaticon.com/icons/svg/467/467280.svg"
                alt="rightarrow"
                class="arrow"
              />
              <Card>
                <img
                  src="https://image.flaticon.com/icons/svg/839/839860.svg"
                  alt="entregues"
                  class="img"
                />
                <Label color="000" marginTop="10" fontweight="bold">
                  {query.get("on_base")}
                </Label>
                <Label color="000" marginTop="10">
                  Entregues
                </Label>
              </Card>
            </ImagensContainer>
          </OverviewContainer>
          <CardContainer
            margin="0"
            justifyItems="center"
            background="fff"
            padding="10"
            height="100"
            width="35"
          >
            <Card height="100" justifyContent="space-between">
              <Label fontsize="12" fontweight="bold">
                Dashboard
              </Label>
              <Label fontweight="bold" marginbottom="5">
                Adesão Mobile
              </Label>
              <Label marginbottom="5">30 Dias</Label>
              <Label color="000" fontsize="16" marginbottom="5">
                {query.get("mobile_30d")}
              </Label>
              <Label marginbottom="5">Mês Atual</Label>
              <Label color="000" fontsize="16">
                {query.get("mobile_month")}
              </Label>
            </Card>
          </CardContainer>
        </CardContainer>
        <CardContainer
          gridTemplateColumns="100% 100%"
          marginTop="310"
          position="absolute"
          border="none"
          shadow="none"
          gap="24"
        >
          <OverviewContainer alignItems="center">
            <Label fontweight="bold" marginbottom="20" fontsize="16">
              Pedidos <Label fontsize="14">- Visão Geral</Label>
            </Label>
            <CardContainer
              gridTemplateColumns="repeat(2, 1fr)"
              border="none"
              shadow="none"
              textAlign="center"
            >
              <Label
                fontweight="bold"
                fontsize="14"
                color="000"
                marginbottom="15"
              >
                Total 30 Dias - {query.get("total_orders_30d")}
              </Label>
              <Label
                fontweight="bold"
                fontsize="14"
                color="000"
                marginbottom="15"
              >
                Total Mês Atual - {query.get("total_orders_month")}
              </Label>
              <Label fontweight="bold" fontsize="14" color="000">
                Entregues 30 Dias - {query.get("delivered_30d")}
              </Label>
              <Label fontweight="bold" fontsize="14" color="000">
                Entregues Mês Atual - {query.get("delivered_month")}
              </Label>
            </CardContainer>
          </OverviewContainer>
          <OverviewContainer alignItems="center" width="60">
            <Label fontweight="bold" marginbottom="20" fontsize="16">
              Pedidos na Base<Label fontsize="14">- Por Vencimento</Label>
            </Label>
            <Label
              fontweight="bold"
              fontsize="14"
              color="000"
              marginbottom="15"
            >
              Vencendo Hoje - {query.get("onbase_expiring_today")}
            </Label>
            <Label fontweight="bold" fontsize="14" color="000">
              Vencidos - {query.get("onbase_overdue")}
            </Label>
          </OverviewContainer>
        </CardContainer>
        <CardContainer
          gridTemplateColumns="36% 36% 37% 37%"
          marginTop="445"
          position="absolute"
          border="none"
          shadow="none"
          gap="24"
        >
          <OverviewContainer textAlign="center">
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              SLA Geral<Label>- 30 Dias</Label>
            </Label>
            <Label fontsize="14">{query.get("generalsla_30d")}</Label>
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              SLA Geral<Label>- Mês Atual</Label>
            </Label>
            <Label fontsize="14">{query.get("generalsla_month")}</Label>
          </OverviewContainer>
          <OverviewContainer textAlign="center">
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              SLA Base<Label>- 30 Dias</Label>
            </Label>
            <Label fontsize="14">{query.get("basesla_30d")}</Label>
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              SLA Base<Label>- Mês Atual</Label>
            </Label>
            <Label fontsize="14">{query.get("basesla_month")}</Label>
          </OverviewContainer>
          <OverviewContainer textAlign="center">
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              OTIF<Label>- 30 Dias</Label>
            </Label>
            <Label fontsize="14">{query.get("otif_30d")}</Label>
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              OTIF<Label>- Mês Atual</Label>
            </Label>
            <Label fontsize="14">{query.get("otif_month")}</Label>
          </OverviewContainer>
          <OverviewContainer textAlign="center" height="100">
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              SLA Clientes<Label>- 3 Piores</Label>
            </Label>
            <Label fontsize="14" fontweight="bold" color="000">
              {query.get("sla_by_clients")}
            </Label>

            <Label fontsize="14" fontweight="bold" color="000">
              {query.get("sla_by_clients")}
            </Label>
            <Label fontsize="14" fontweight="bold" color="000">
              {query.get("sla_by_clients")}
            </Label>
          </OverviewContainer>
        </CardContainer>
      </Body>
    </Container>
  );
}
