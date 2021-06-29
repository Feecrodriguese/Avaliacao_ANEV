const RecebendoVariavel = ({ rec_variavel, teste, valor_novo }) => {
    return (
        <div>
            O valor com desconto é: { rec_variavel }
            <br />
            O teste é { teste }
            <br/>
            <br/>
            O resultado da multiplicação do meu primo foi de: { valor_novo }
        </div>
    )
} 

export default RecebendoVariavel