containerName="nestapi"
containerImage="nestapi"
echo "[INFO] removendo o container e imagem anteriores caso já existem"
sudo docker stop ${containerName}
sudo docker rm ${containerName}
sudo docker image rm ${containerImage}
echo "[INFO] Buildando projeto"
sudo docker build -t ${containerImage} .
echo "[INFO] startando a aplicação."
sudo docker run -d -p 3000:3000 --name ${containerName} ${containerImage}