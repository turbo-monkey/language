"use client";

import Layout from "@/app/components/layout";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout.Main>
      <Layout.Heading>Leer voor het inburgeringsexamen</Layout.Heading>
      <Layout.Subheading>Kies de gewenste moedertaal</Layout.Subheading>

      <Layout.Section>
        <Grid xs={6} sm={4}>
          <Link href="/es/">
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/images/spain.svg"
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt="Espanol"
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text weight="bold" h2>
                    Español
                  </Text>
                  <Text size="$lg">
                    ¿Eres de un país de habla hispana? Entonces aquí es donde
                    puedes comenzar tus lecciones.
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Link>
        </Grid>
      </Layout.Section>
    </Layout.Main>
  );
}
