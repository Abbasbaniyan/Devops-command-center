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
                ./ ubuntu@YOUR_SERVER_IP:/var/www/html/
                '''
            }
        }

        stage('Reload Nginx') {
            steps {
                sh '''
                ssh ubuntu@YOUR_SERVER_IP "sudo systemctl reload nginx"
                '''
            }
        }

    }
}