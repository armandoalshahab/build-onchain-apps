import { Theme, Flex, Container, Section } from '@radix-ui/themes';
import Header from '../../src/components/header/Header';
import { TitleAndMetaTags } from '../../src/components/TitleAndMetaTags';
import styles from '../../src/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <TitleAndMetaTags
        title="Build Onchain Apps"
        description="Build Onchain Applications with the best consumer experience in a few minutes."
        image="themes.png"
      />

      <div>
        <Theme radius="medium" scaling="100%">
          <Header />
        </Theme>

        <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
          <Section>
            <Flex direction="column" align="start">
              <p className="my-2">
                Build Onchain Apps takes an opinionated approach to streamlining and automating
                early decisions you must make in building your consumer product.
              </p>
              <p className="my-2">
                The onchain app generated by the CLI aims to be a companion that walks alongside you
                over the first few months of building.
              </p>
              <p className="my-2">
                So, if you are either a hackathon participant and/or an ambitious entrepreneur
                aiming to establish the next successful company, this is built with you in mind. 💙
              </p>
            </Flex>
            <Flex>
              <div className={styles.CodeBlock}>
                <span className={styles.CodeBlockLang}>sh</span>
                <pre className={styles.CodeBlockPre}>
                  <code className={styles.CodeBlockCode}>
                    <span>$</span> <span>npx @coinbase/build-onchain-apps@latest create</span>
                  </code>
                </pre>
              </div>
            </Flex>
          </Section>
        </Container>
      </div>
    </>
  );
}