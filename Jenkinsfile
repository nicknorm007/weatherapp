pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/nicknorm007/weatherapp.git'
      }
    }
     
    stage('Build') {
      steps {
        cleanWs()
        sh 'npm install'
        sh echo "------> Setting key OCD <------"
        sh touch .env
        sh echo "OCD_API_KEY=344bc7468f60465cb226f347cb33b2cc" > .env
        sh echo "------> Installing node modules <------"
        sh npm install pm2@latest -g
        sh npm install
      }
    }  
    
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}