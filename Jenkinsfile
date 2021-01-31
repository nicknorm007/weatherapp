pipeline {
  agent any
    
  tools {nodejs "Node14"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/nicknorm007/weatherapp.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'echo "------> Setting OCD Key <------"'
        sh 'touch .env'
        sh "echo OCD_API_KEY=${OCD_API_KEY} > .env"
        sh 'echo "------> Installing node modules <------"'
        sh 'npm install pm2@latest -g'
        sh 'npm install'
      }
    }  
    
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}
