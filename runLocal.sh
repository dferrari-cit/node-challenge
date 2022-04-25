containerNameApi="nestapi"
containerImageApi="nestapi"
containerNameDB="mongodb"
containerImageDB="mongo"
containerUserDB="admin"
containerPasswordDB="secret"
echo "[INFO] removendo o container e imagem anteriores caso já existem"
sudo docker stop ${containerNameApi}
sudo docker rm ${containerNameApi}
sudo docker image rm ${containerImageApi}
sudo docker stop ${containerNameDB}
sudo docker rm ${containerNameDB}
echo "[INFO] Buildando projeto"
docker run -d -p 27017:27017 --name ${containerNameDB} -e MONGO_INITDB_ROOT_USERNAME=${containerUserDB} -e MONGO_INITDB_ROOT_PASSWORD=${containerPasswordDB} ${containerImageDB}
sudo docker build -t ${containerImageApi} .
echo "[INFO] startando a aplicação."
sudo docker run -d -p 3000:3000 --name ${containerNameApi} ${containerImageApi}