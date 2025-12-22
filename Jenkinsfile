pipeline {
  agent any

  stages {
    stage('Install Backend') {
      steps {
        dir('backend') {
          sh 'npm install'
        }
      }
    }
    stage('Install Frontend') {
      steps {
        dir('frontend') {
          sh 'npm install'
        }
      }
    }
    stage('API Smoke Tests') {
      steps {
        echo 'Run Postman collection via Newman in CI as needed.'
      }
    }
    stage('Selenium Smoke') {
      steps {
        echo 'Run Selenium scripts on agent with Chrome + driver.'
      }
    }
  }
}
