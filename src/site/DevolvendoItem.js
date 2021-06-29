
const DevolvendoItem = ({ numero, retorno }) => {

    const multiplicar = () => {
        let valor = numero * 0.10
        console.log("Aqui estou no filho: " + valor)

        retorno( valor )
    }

    return (
        <div>
            <span> Calculador de desconto de produtos </span>
            <br/>
            O seu valor com desconto é: { numero }
            <br />
            <input 
                type="button" 
                value="Multiplicar por valor de desconto de 10%"
                onClick={ () => { multiplicar() }}
             />
        </div>
    )
}

export default DevolvendoItem