pipeline{
	stages {
		stage('Pull the code repo') {
			steps {
				withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD']]){
					sh '''
						docker build -t andresaaap/cloudcapstone:$BUILD_ID .
					'''
				}
			}
		}

		stage('Build Docker Image') {
			steps {
				withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD']]){
					sh '''
						docker build -t andresaaap/cloudcapstone:$BUILD_ID .
					'''
				}
			}
		}


		stage('deploy to EKS using rolling deployment') {
			steps {
				withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD']]){
					sh '''
						docker build -t andresaaap/cloudcapstone:$BUILD_ID .
					'''
				}
			}
		}
	}