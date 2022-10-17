import { Card, Typography } from "antd";

import usefulLinks from "../../../mocks/links.mocks.json";

const { Link, Title } = Typography;
const { Grid } = Card;

export function SectionLinks() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Title
        style={{
          color: 'purple',
          fontFamily: 'Rozha One, serif',
          fontSize: '2.75rem',
          marginBottom: '3rem',
          width: '70vw'
        }}
      >
        Aqui você encontra alguns Links úteis para o dia a dia!
      </Title>
      <Card style={{ width: '70vw' }}>
        {usefulLinks.map(usefulLink => {
          return (
            <Grid key={usefulLink.key}>
              <Link href={usefulLink.href}>
                {usefulLink.linkText}
              </Link>
            </Grid> 
          );
        })}
      </Card>
    </section>
  );
}