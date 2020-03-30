import React from "react";
import { Bar } from 'react-chartjs-2'

import useQuery from "../../hooks/useQuery";
import Header from "../../Components/Header";
import setting from "./setting"

import {
  CardContainer,
  Card,
  OverviewContainer,
  Label,
  ImagensContainer
} from "../../Components/Card";
import { Container, Body } from "../../Components/Container";

export default function LIOP() {

  const query = useQuery();

  const queryJson = query.get("json");

  const data = JSON.parse(queryJson)

  const graphic = {
    datasets: [{
      label: 'Target',
      type: 'line',
      data: [95, 95, 95, 95],
      fill: false,
      borderColor: '#e6e6e6',
      pointBorderColor: '#e6e6e6',
      pointBackgroundColor: '#e6e6e6',
      pointHoverBackgroundColor: '#e6e6e6',
      pointHoverBorderColor: '#e6e6e6',
      pointRadius: 0,
    }, {
      type: 'bar',
      label: 'Clientes',
      data: [data.sla_by_clients[0].value, data.sla_by_clients[1].value, data.sla_by_clients[2].value, 70],
      fill: false,
      backgroundColor: '#9d0d62',
      hoverBackgroundColor: '#9d0d62',
      hoverBorderColor: '#9d0d62',
      yAxisID: 'y-axis-1'
    }
    ]
  };

  const options = {
    responsive: true,
    labels: [data.sla_by_clients[0].name, data.sla_by_clients[1].name, data.sla_by_clients[2].name],
    tooltips: {
      mode: 'label'
    },
    elements: {
      line: {
        fill: false,

      }
    },
    scales: {

      xAxes: [
        {
          display: true,
          gridLines: {
            display: false
          },

          labels: [data.sla_by_clients[0].name, data.sla_by_clients[1].name, data.sla_by_clients[2].name],
        }
      ],
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          },

        }
      ]
    }
  };



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
                  {data.in_preparation}
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
                  {data.in_transit}
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
                  {data.on_base}
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
                  {data.delivered}
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
            width="41"
          >
            <Card height="100" justifyContent="space-between">
              <Label fontsize="12" fontweight="bold">
                Dashboard
              </Label>
              <Label fontweight="bold" marginbottom="5">
                Adesão Mobile
              </Label>
              <Label marginbottom="5">30 Dias</Label>
              <Label color={setting.setColor('mobile_30d', data.mobile_30d)} fontsize="20" marginbottom="5">
                {data.mobile_30d} %
              </Label>
              <Label marginbottom="5">Mês Atual</Label>
              <Label color={setting.setColor('mobile_month', data.mobile_month)} fontsize="20">
                {data.mobile_month} %
              </Label>
            </Card>
          </CardContainer>
        </CardContainer>
        <CardContainer
          gridTemplateColumns="100% 100%"
          marginTop="300"
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
                Total 30 Dias - {data.total_orders_30d}
              </Label>
              <Label
                fontweight="bold"
                fontsize="14"
                color="000"
                marginbottom="15"
              >
                Total Mês Atual - {data.total_orders_month}
              </Label>
              <Label fontweight="bold" fontsize="14" color="000">
                Entregues 30 Dias - {data.delivered_30d}
              </Label>
              <Label fontweight="bold" fontsize="14" color="000">
                Entregues Mês Atual - {data.delivered_month}
              </Label>
            </CardContainer>
          </OverviewContainer>
          <OverviewContainer alignItems="center" width="67">
            <Label fontweight="bold" marginbottom="20" fontsize="16">
              Pedidos na Base<Label fontsize="14">- Por Vencimento</Label>
            </Label>
            <Label
              fontweight="bold"
              fontsize="14"
              color="000"
              marginbottom="15"
            >
              Vencendo Hoje - {data.onbase_expiring_today}
            </Label>
            <Label fontweight="bold" fontsize="14" color="000">
              Vencidos - {data.onbase_overdue}
            </Label>
          </OverviewContainer>
        </CardContainer>
        <CardContainer
          gridTemplateColumns="30% 30% 30% 37%"
          marginTop="425"
          position="absolute"
          border="none"
          shadow="none"
          gap="24"
        >
          <OverviewContainer textAlign="center" height="160" justifyContent='space-between'>
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              SLA Geral<Label>- 30 Dias</Label>
            </Label>
            <Label fontsize="30" color={setting.setColor('geral_30d', data.generalsla_30d)}>{data.generalsla_30d} %</Label>
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              SLA Geral<Label>- Mês Atual</Label>
            </Label>
            <Label fontsize="30" color={setting.setColor('geral_month', data.generalsla_month)}>{data.generalsla_month} %</Label>
          </OverviewContainer>
          <OverviewContainer justifyContent='space-between' textAlign="center" height="160">
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              SLA Base<Label>- 30 Dias</Label>
            </Label>
            <Label fontsize="30" color={setting.setColor('base_30d', data.basesla_30d)}>{data.basesla_30d} %</Label>
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              SLA Base<Label>- Mês Atual</Label>
            </Label>
            <Label fontsize="30" color={setting.setColor('base_month', data.basesla_month)}>{data.basesla_month} %</Label>
          </OverviewContainer>
          <OverviewContainer justifyContent='space-between' textAlign="center" height="160">
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              OTIF<Label>- 30 Dias</Label>
            </Label>
            <Label fontsize="30" color={setting.setColor('otif_30d', data.otif_30d)}>{data.otif_30d} %</Label>
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              OTIF<Label>- Mês Atual</Label>
            </Label>
            <Label fontsize="30" color={setting.setColor('otif_month', data.otif_month)}>
              {data.otif_month} %
            </Label>
          </OverviewContainer>
          <OverviewContainer textAlign="center" height="160" justifyContent='space-between'>

            <Bar
              data={graphic}
              options={options}
              width={80}
              height={40}

            />
          </OverviewContainer>

        </CardContainer>
      </Body>
    </Container>
  );
}
