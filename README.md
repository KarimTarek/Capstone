# capstone

Folder structure explanation:
	1- eksctl:
		this folder contains the bash script which contains the eksctl cli to create the kubernetes cluster
	2- kubernetes:
		this folder conatains all the deployment and service YAML files to be applied to the kubernetes cluster
	3- pressTheButton:
		Nodejs app which includes the docker file
	4- Jenkinsfile:
		Jenkinsfile which containts the pipeline stages in order to deploy our code to eks
	5- Readme:
		Readme


Steps taken to complete the project:
	1- Installed aws client using the IAM access key and secret key to prepare the environment for using eksctl
	2- using eksctl in the bash script insice eksctl folder in order to create the kubernetes cluster on AWS using cloud formation as well as installing the dashboard (Kubernetes GUI) to be able to track things easily
	3- Spin up an EC2 instance just like what we did in the previous project to install jenkins and all the plugins i needed to complete the pipeline also installed docker, aws and kubectl cli tools (including kubeconfig file)
	4- Implemented my own simple node js application that is just a button at the middle of the screen which changes the color of the background every time you click it
	5- Installed using npm "ESlint" which is a package used for linting and checking out syntax problems
	6- Created the Dockerfile which has the instructions to build the docker image
	7- Created the jenkins file which contains the stages explained in the jenkinsfile itself
	8- Created a repository on github and put all the code on it
	9- Configured a webhook between github and jenkins to trigger the pipeline whenever a change occurs
	10- Created the deployment files which will be used to apply the deployment on eks cluster and handled the deployment strategy as rolling updates.
	11- i tried changing stuff in the application and making sure that the app has 0 downtime due to the rolling update strategy.