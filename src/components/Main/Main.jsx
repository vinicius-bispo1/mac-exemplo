import Card from "./Card"
import * as S from "./main_styled"
import sofa from "../../assets/sofa.png"

export default function Main() {
  return (
    <main>
      <S.Section>
        <h2>Aqui você ira colocar as imagens e a função de mudar a imagem principal</h2>
      </S.Section>
      <S.Promocao>
        <h2>Promoção</h2>
        <S.Centro>
        <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"}/>
         <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"}/>
          <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"}/>
        </S.Centro>
      </S.Promocao>
    </main>
  )
}
