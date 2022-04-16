export async function testConnection(req, res) {
  try{
    const value = req;
    res.status(200).send('123');
  }catch(error){
    res.status(500).send(error);
  }
}