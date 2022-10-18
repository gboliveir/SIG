import { Card, Typography } from "antd";
import { Title } from "../../../components/Title";

import usefulLinks from "../../../mocks/links.mocks.json";

const { Link } = Typography;
const { Grid } = Card;

export function SectionLinks() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 100
      }}
    >
      <div>
        <Title text="Aqui você encontra alguns Links úteis para o dia a dia!" />
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
      </div>
    </section>
  );
}