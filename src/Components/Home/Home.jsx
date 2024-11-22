import {MainStyle, Copo, Section} from "./style";

export default function Home() {
    return (
        <MainStyle>
            <section>
                <h2>Mais que Café</h2>
                <h1>Isso é <span>Starbucks</span></h1>
                <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                <button>SAIBA MAIS</button>
                <div>
                    <img src="src\assets\images\copoVermelhoP.png" alt="" />
                    <img src="src\assets\images\copoLaranjaP.png" alt="" />
                    <img src="src\assets\images\copoAmareloP.png" alt="" />
                </div>
            </section>
            <Section>
                <Copo src="src\assets\images\copoLaranja.png" alt="" />
                <img src="src\assets\images\elipseVerde.png" alt="" />
            </Section>
        </MainStyle>
    );
}