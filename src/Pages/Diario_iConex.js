import React from "react";

import Header from "../Components/Header";

import {
  CardContainer,
  Card,
  OverviewContainer,
  Label,
  ImagensContainer
} from "../Components/Card";
import { Container, Body } from "../Components/Container";

export default function Iconex() {
  return (
    <Container>
      <Header
        name="LIOP"
        unidade="iConex Logistica"
        date="03/2020"
        height="18"
        padding="20px 80px"
      />
      <Body>
        <CardContainer
          position="absolute"
          gridTemplateColumns="70% 43%"
          border="none"
          shadow="none"
          gap="25"
          marginTop="60"
        >
          <OverviewContainer>
            <Label fontweight="bold" marginbottom="20" fontsize="16">
              Total de Emissões
            </Label>

            <ImagensContainer>
              <Card>
                <img
                  src="https://img.wine.com.br/fenix/image/_big_bang/logos/wine-logo.svg"
                  alt="empreparacao"
                  class="image"
                />
                <Label color="000" marginTop="10" fontweight="bold">
                  orders_wine
                </Label>
                <Label color="000" marginTop="10">
                  orders_wine_day
                </Label>
              </Card>
              <Card>
                <img
                  src="https://d2e5tu4a4qlws8.cloudfront.net/build/leiturinha/7.11/assets/images/logo-leiturinha-new.svg"
                  alt="emtransferencia"
                  class="image"
                />
                <Label color="000" marginTop="10" fontweight="bold">
                  orders_leit
                </Label>
                <Label color="000" marginTop="10">
                  orders_leit_day
                </Label>
              </Card>

              <Card>
                <img
                  src="https://www.constance.com.br/skin/frontend/constance-v2018/default/images/constance_medalha_h.svg"
                  alt="nabase"
                  class="image"
                />
                <Label color="000" marginTop="10" fontweight="bold">
                  orders_const
                </Label>
                <Label color="000" marginTop="10">
                  orders_const_day
                </Label>
              </Card>
              <Card>
                <img
                  src="https://www.hipervarejo.com.br/media/wysiwyg/hipervarejo-logo-main3.png"
                  alt="entregues"
                  class="image"
                />
                <Label color="000" marginTop="10" fontweight="bold">
                  orders_hiper
                </Label>
                <Label color="000" marginTop="10">
                  orders_hiper_day
                </Label>
              </Card>
            </ImagensContainer>
          </OverviewContainer>
          <CardContainer
            gridTemplateColumns="repeat(2,1fr)"
            gridTemplateRows="repeat(5,1fr)"
            margin="0"
            background="fff"
            padding="10"
            gap="5"
            minHeight="100"
          >
            <Label color="000" fontsize="12" fontweight="bold">
              Zap - orders_zap
            </Label>
            <Label color="000" fontsize="12" fontweight="bold">
              Retire Agora - orders_retire
            </Label>
            <Label color="000" fontsize="12" fontweight="bold">
              MedLevensohn - orders_med
            </Label>
            <Label color="000" fontsize="12" fontweight="bold">
              Móveis Linhares - orders_linh
            </Label>
            <Label color="000" fontsize="12" fontweight="bold">
              Viabem/Click Music - orders_viab
            </Label>
            <Label color="000" fontsize="12" fontweight="bold">
              NewNutrition - orders_nutri
            </Label>
            <Label color="000" fontsize="12" fontweight="bold">
              Pimpolho - orders_pimp
            </Label>
            <Label color="000" fontsize="12" fontweight="bold">
              Mercadão - orders_merc
            </Label>
            <Label color="000" fontsize="12" fontweight="bold">
              Golden - orders_gold
            </Label>
          </CardContainer>
        </CardContainer>
        <CardContainer
          gridTemplateColumns="69% 66% 51%"
          marginTop="225"
          position="absolute"
          border="none"
          shadow="none"
          gap="10"
          alignItems="normal"
        >
          <OverviewContainer textAlign="center">
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              SLA Por Base
            </Label>
            <Label color="000" fontsize="22">
              sla_graphic
            </Label>
          </OverviewContainer>
          <OverviewContainer textAlign="center">
            <Label fontweight="bold" marginbottom="5" fontsize="14">
              SLA Por Base
            </Label>
            <Label color="000" fontsize="22">
              cliente_sla
            </Label>
          </OverviewContainer>

          <CardContainer
            gridTemplateColumns="repeat(2,1fr)"
            border="none"
            shadow="none"
            gap="5"
          >
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                VIX __ <Label color="000">ord_VIX</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                POC __ <Label color="000">ord_POC</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                SAO __ <Label color="000">ord_SAO</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                BAU __ <Label color="000">ord_BAU</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                BSB __ <Label color="000">ord_BSB</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                CIM __ <Label color="000">ord_CIM</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                CPQ __ <Label color="000">ord_CPQ</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                GIG __ <Label color="000">ord_GIG</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                RAO __ <Label color="000">ord_RAO</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                UDI __ <Label color="000">ord_UDI</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                CNF __ <Label color="000">ord_CNF</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                REC __ <Label color="000">ord_REC</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                SSA __ <Label color="000">ord_SSA</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                GYN __ <Label color="000">ord_GYN</Label>
              </Label>
            </OverviewContainer>
            <OverviewContainer textAlign="center">
              <Label fontweight="bold" color="000">
                LNS __ <Label color="000">ord_LNS</Label>
              </Label>
            </OverviewContainer>
          </CardContainer>
        </CardContainer>
      </Body>
    </Container>
  );
}
