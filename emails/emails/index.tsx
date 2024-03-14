import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  
  export const NizzyEmail = () => (
    <Html>
      <Head />
      <Preview>Developer Roadmap</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={'https://cdn.discordapp.com/attachments/1198251980469047468/1213462623039782952/Untitled_design_-_2024-03-02T072252.579.png?ex=65f59022&is=65e31b22&hm=dc7b600aa63d35288a4bb198bf12a94bec4f6b7a5492df41dc86fc7734c8bfe8&'}
            width={48}
            height={48}
            alt="NizzyABI"
          />
          <Heading style={heading}>🚀 Your Developer Roadmap</Heading>
          <Section style={body}>
            <Text style={paragraph}>
              <Link style={link} href='https://nizzyabi-roadmap.com'>
                👉 Click here to go to the roadmap 👈
              </Link>
            </Text>
            
          </Section>
          <Text style={paragraph}>
            Best,
            <br />- Nizar
          </Text>
          <Hr style={hr} />
          
          <Text style={footer}>NizzyABI Inc.</Text>
          
        </Container>
      </Body>
    </Html>
  );
  
  
  export default NizzyEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 25px 48px",
    backgroundImage: 'url("/assets/raycast-bg.png")',
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat, no-repeat",
  };
  
  const heading = {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "48px",
  };
  
  const body = {
    margin: "24px 0",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const link = {
    color: "#FF6363",
  };
  
  const hr = {
    borderColor: "#dddddd",
    marginTop: "48px",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    marginLeft: "4px",
  };
  