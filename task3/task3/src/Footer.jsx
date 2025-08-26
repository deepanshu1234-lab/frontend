import React from "react";
import { Grid, List, Icon } from "semantic-ui-react";

export default function Footer() {
  return (
    <div style={{ background: "#008080", color: "white", padding: "30px", marginTop: "20px" }}>
      <Grid divided="vertically" stackable>
        <Grid.Row columns={3}>
          <Grid.Column>
            <h4>Explore</h4>
            <List link inverted>
              <List.Item as="a">Home</List.Item>
              <List.Item as="a">Questions</List.Item>
              <List.Item as="a">Articles</List.Item>
              <List.Item as="a">Tutorials</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <h4>Support</h4>
            <List link inverted>
              <List.Item as="a">FAQs</List.Item>
              <List.Item as="a">Help</List.Item>
              <List.Item as="a">Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <h4>Stay Connected</h4>
            <Icon name="facebook" size="big" />
            <Icon name="twitter" size="big" />
            <Icon name="instagram" size="big" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        DEV@Deakin 2022 • Privacy Policy • Terms • Code of Conduct
      </div>
    </div>
  );
}
