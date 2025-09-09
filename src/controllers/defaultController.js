import DefaultModel from "../models/defaultModel.js"
async function getDefault(req, res){
  try {
    const defaultModel = new DefaultModel(); 
    res.status(200).send(defaultModel.getMessage());
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

export default { getDefault };

