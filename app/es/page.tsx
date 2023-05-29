"use client";

import Layout from "@/app/components/layout";
import Link from "next/link";
import LESSONS from "@/app/es/lessons";
import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <Layout.Main>
      <Layout.Header>
        <Layout.Heading>Elija una lección a continuación</Layout.Heading>
      </Layout.Header>

      <Layout.Section>
        {/*{LESSONS.map((lesson) => ( <div key={lesson.name}>*/}
        {/*    <Image*/}
        {/*      src={lesson.imageSrc}*/}
        {/*      alt={lesson.title}*/}
        {/*      width={200}*/}
        {/*      height={200}*/}
        {/*    />*/}
        {/*    <h3>{lesson.title}</h3>*/}
        {/*    <Link href={`/es/${lesson.name.toLowerCase()}`}>*/}
        {/*      {lesson.name.toLowerCase()}*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*))}*/}

        {LESSONS.map((lesson) => (
          <Grid xs={6} sm={3}>
            <Link href={`/es/${lesson.name.toLowerCase()}`}>
              <Card isPressable>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/images/lessons/numbers.jpg"
                    objectFit="cover"
                    width="100%"
                    height={140}
                    alt="Espanol"
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text weight="bold">{lesson.title}</Text>
                    <Text
                      css={{
                        color: "$accents7",
                        fontWeight: "$semibold",
                        fontSize: "$sm",
                      }}
                    >
                      Commenciar {lesson.name}
                    </Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Link>
          </Grid>
        ))}
      </Layout.Section>
    </Layout.Main>
  );
}
