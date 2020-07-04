pipeline {
   	agent {
    	label 'master'
   	}
   	
   	stages {
      	stage('Hello') {
         	steps {
	            echo 'Hello World'
	            // sh '''docker ps --all'''
	            // sh '''kubectl get nodes'''
	            git credentialsId: 'github', url: 'https://github.com/KarimTarek/Capstone.git'
         	}
      	}
   	}

 //   	stage('deploy to EKS using rolling deployment') {
	// 	steps {
	// 		withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD']]){
	// 			sh '''
	// 				docker build -t andresaaap/cloudcapstone:$BUILD_ID .
	// 			'''
	// 		}
	// 	}
	// }
}
