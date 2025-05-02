import express from "express"

export const changeVolume = async (req, res) => {
    try {
        const { placa, volume } = req.body
        
        if (!placa || !volume) {
            return res.status(400).json({ success: false, message: "Todos os campos sao obrigatorios" })
        }
        
        res.status(200).json({ success: true, message: "Volume para o veiculo de placa " + placa + " foi alterado para " + volume + "%" })
    } catch (error) {
        console.log("Erro na funcao changeVolume", error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }   
}
