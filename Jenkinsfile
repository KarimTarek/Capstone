pipeline {
   	agent {
    	label 'master'
   	}
   	
   	stages {
      	stage('Cloning the repo') {
         	steps {
	            git credentialsId: 'b36b229f-4fc6-44a8-91e4-f0a9967cb65f', url: 'https://github.com/KarimTarek/Capstone.git'
         	}
      	}

      	stage('running lint checks') {
         	steps {
         		dir('pressTheButton') {
         			nodejs('Nodejs') {
				    	sh 'npx eslint index.js'
					}
         		}	            
         	}
      	}

      	stage('building docker image') {
         	steps {
         		dir('pressTheButton') {
         			sh 'docker build -t k4r1m/pressthebutton .'
         		}	            
         	}
      	}

      	stage('pushing the image to docker hub') {
         	steps {
         		script {
         			withDockerRegistry(credentialsId: 'docker') {
					    sh 'docker push k4r1m/pressthebutton'
					}
         		}
         	}
      	}

      	stage('deploying changes using rolling out deployment') {
         	steps {
         		dir('kubernetes') {
         			sh 'kubectl apply -f deployment.yaml'
         			sh 'kubectl apply -f service.yaml'
         		}	            
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
