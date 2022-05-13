containerNameApi="nestapi"
containerNameDB="mongodb"
containerImageDB="mongo"
containerImageNode="node"
containerImageNodeApi="node-challenge_api"
containerNameRabbit="rabbit"
containerImageRabbit="rabbitmq:3-management"
containerNameRemoteConsumer="remoteconsumer"
containerImageRemoteConsumer="node-challenge_remoteconsumer"
containerNameLocalConsumer="localconsumer"
containerImageLocalConsumer="node-challenge_localconsumer"
echo "[INFO] removendo containers e imagens existentes"
sudo docker stop ${containerNameApi}
sudo docker rm ${containerNameApi}
sudo docker stop ${containerNameDB}
sudo docker rm ${containerNameDB}
sudo docker stop ${containerNameRabbit}
sudo docker rm ${containerNameRabbit}
sudo docker stop ${containerNameRemoteConsumer}
sudo docker rm ${containerNameRemoteConsumer}
sudo docker stop ${containerNameLocalConsumer}
sudo docker rm ${containerNameLocalConsumer}
sudo docker image rm ${containerImageRemoteConsumer}
sudo docker image rm ${containerImageLocalConsumer}
sudo docker image rm ${containerImageRabbit}
sudo docker image rm ${containerNameApi}
sudo docker image rm ${containerImageNodeApi}
sudo docker image rm ${containerImageDB}
sudo docker image rm ${containerImageNode}
sudo rm -rf rabbitData