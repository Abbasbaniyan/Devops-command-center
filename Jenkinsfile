pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Abbasbaniyan/devops-command-center.git'
            }
        }

        stage('Deploy Website') {
            steps {
                sh '''
                rsync -av --delete \
                --exclude=".git" \
                --exclude="Jenkinsfile" \
                ./ ubuntu@51.20.54.186:/var/www/html/
                '''
            }
        }

        stage('Reload Nginx') {
            steps {
                sh '''
                ssh ubuntu@51.20.54.186 "sudo systemctl reload nginx"
                '''
            }
        }

    }
}