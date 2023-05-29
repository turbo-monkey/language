"use client";

import Layout from "@/app/components/layout";
import Dictaphone from "@/app/components/dictaphone";
import useAssignment from "@/app/hooks/use-assignment";
import Link from "next/link";
import ASSIGNMENTS from "@/app/es/numeros/assignments";
import { Button, Grid, Progress, Spacer, Table, Text } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import TextToSpeech from "@/app/components/text-to-speech";

export default function Numbers() {
  const {
    assignment,
    isInvalid,
    next,
    setAnswer,
    skip,
    isFinished,
    currentAssignment,
  } = useAssignment(ASSIGNMENTS);

  return (
    <Layout.Main>
      <Layout.Heading>Het getal, de getallen</Layout.Heading>
      <Progress
        striped
        value={(currentAssignment / ASSIGNMENTS.length) * 100}
        color="primary"
        status="primary"
      />

      {assignment && (
        <Layout.Section key={assignment.text}>
          <Layout.SectionHeading>
            {assignment.text} ({assignment.hint})
          </Layout.SectionHeading>
          <Layout.SectionContent>
            <Image
              src={assignment.imageSrc}
              alt={assignment.text}
              height={200}
              width={600}
            />
            <Spacer />
            <Dictaphone
              onStart={() => setAnswer("")}
              command={{
                callback: (command) => {
                  setAnswer([command.command].flat().at(-1) ?? "");
                },
                command: assignment.text,
              }}
            />
            <Spacer />

            <Table>
              <Table.Header>
                <Table.Column>Hulp</Table.Column>
                <Table.Column>&nbsp;</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row key="1">
                  <Table.Cell>
                    <Text weight="bold">Pronunciar</Text>
                  </Table.Cell>
                  <Table.Cell>{assignment.help.pronunciation}</Table.Cell>
                </Table.Row>
                <Table.Row key="2">
                  <Table.Cell>
                    <Text weight="bold">Explicación</Text>
                  </Table.Cell>
                  <Table.Cell css={{ whiteSpace: "normal" }}>
                    {assignment.help.description}
                  </Table.Cell>
                </Table.Row>
                <Table.Row key="3">
                  <Table.Cell>
                    <Text weight="bold">Ejemplo</Text>
                  </Table.Cell>
                  <Table.Cell css={{ whiteSpace: "normal" }}>
                    <TextToSpeech text={assignment.text} />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Layout.SectionContent>
          <Spacer y={3} />

          <Grid.Container gap={1} justify="space-between">
            <Grid>
              <Button
                rounded
                size="lg"
                type="button"
                onClick={next}
                disabled={isInvalid}
                color="success"
              >
                Volgende
              </Button>
            </Grid>
            <Grid>
              <Button
                rounded
                ghost
                type="button"
                onClick={skip}
                light
                size="lg"
                disabled={isFinished}
              >
                Overslaan
              </Button>
            </Grid>
          </Grid.Container>
        </Layout.Section>
      )}

      {!assignment && (
        <Layout.Section>
          <Layout.SectionHeading>Je bent klaar</Layout.SectionHeading>
          <Layout.SectionSubheading>
            Je mag door naar de volgende les
          </Layout.SectionSubheading>

          <Link href="/">Kleuren</Link>
        </Layout.Section>
      )}
    </Layout.Main>
  );
}
