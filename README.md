# Barter Application

A comprehensive microservices-based barter/trading platform built with Angular frontend and Spring Boot microservices architecture.

## 🏗️ Project Architecture

### Overview
This is a microservices-based application that enables users to trade items, manage events, venues, and handle barter requests. The application follows a distributed architecture pattern with separate frontend and backend services.

### Architecture Diagram
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Angular       │    │   Spring Cloud  │    │   Microservices │
│   Frontend      │◄──►│   Gateway       │◄──►│   (Multiple)    │
│   (Port 4200)   │    │   (Port 8080)   │    │   (Various)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   Eureka Server │
                       │   (Discovery)   │
                       └─────────────────┘
```

## 🚀 Tech Stack

### Frontend
- **Framework**: Angular 16.2.0
- **UI Framework**: Angular Material 16.2.10
- **CSS Framework**: Bootstrap 5.3.2
- **Authentication**: Angular OAuth2 OIDC 15.0.1
- **HTTP Client**: Angular HttpClient
- **Routing**: Angular Router
- **State Management**: RxJS 7.8.0
- **Build Tool**: Angular CLI 16.2.0
- **Package Manager**: npm

### Backend Microservices
- **Framework**: Spring Boot 2.7.16/2.7.17
- **Language**: Java 8
- **Build Tool**: Maven
- **Cloud Platform**: Spring Cloud 2021.0.8
- **Service Discovery**: Netflix Eureka Server
- **API Gateway**: Spring Cloud Gateway
- **Security**: Spring Security + OAuth2 Resource Server
- **Database**: 
  - H2 Database (Development)
  - MySQL (Production)
- **ORM**: Spring Data JPA
- **Lombok**: For reducing boilerplate code

### DevOps & Deployment
- **Containerization**: Docker
- **Base Image**: OpenJDK 8
- **Port Configuration**: Various ports (8080, 8082, etc.)

## 📁 Project Structure

```
Barter app/
├── Front/                          # Angular Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/         # Reusable UI components
│   │   │   ├── services/          # HTTP services
│   │   │   ├── Models/            # TypeScript interfaces
│   │   │   ├── front/             # Frontend layout
│   │   │   ├── back/              # Backend admin layout
│   │   │   ├── products/          # Product management
│   │   │   ├── reviews/           # Review system
│   │   │   └── app.module.ts      # Main module
│   │   ├── index.html
│   │   └── main.ts
│   ├── package.json
│   └── angular.json
│
└── Backend/                        # Spring Boot Microservices
    ├── gatewayapi/                 # API Gateway
    ├── Microservice Server/        # Eureka Discovery Server
    ├── Microservice_BarterRequest-Response/  # Barter management
    ├── Microservice_Event-venue/   # Event & venue management
    ├── ProductReviewsMS/           # Product reviews
    ├── MS-Fadwa(Annonce+categorie)/ # Announcements & categories
    ├── MS_ForumComment/            # Forum comments
    ├── SecurityConfigMicroservice/ # Security configuration
    └── MS-Service/                 # Additional services
```

## 🔧 Core Features

### Frontend Features
1. **User Interface**
   - Responsive design with Bootstrap and Angular Material
   - Modern UI with Material Design components
   - Keyboard support with simple-keyboard

2. **Core Modules**
   - **Barter Management**: Create, edit, and manage barter requests
   - **Event Management**: Handle events and venues
   - **Product Management**: Manage products with reviews
   - **Announcement System**: Post and manage announcements
   - **Category Management**: Organize items by categories
   - **Response System**: Handle responses to barter requests
   - **Form Management**: Dynamic form creation and management

3. **Authentication & Security**
   - OAuth2/OIDC integration
   - Secure routing with guards
   - Token-based authentication

### Backend Microservices

1. **API Gateway** (`gatewayapi`)
   - Route requests to appropriate microservices
   - Handle authentication and authorization
   - Load balancing and circuit breaking

2. **Service Discovery** (`Microservice Server`)
   - Eureka server for service registration
   - Service health monitoring
   - Load balancing support

3. **Barter Management** (`Microservice_BarterRequest-Response`)
   - Handle barter requests and responses
   - MySQL database integration
   - RESTful API endpoints

4. **Event & Venue Management** (`Microservice_Event-venue`)
   - Manage events and venues
   - Docker containerization
   - H2 database for development

5. **Product Reviews** (`ProductReviewsMS`)
   - Product review system
   - Rating management
   - Docker support

6. **Announcements & Categories** (`MS-Fadwa`)
   - Announcement management
   - Category organization
   - Content management

7. **Security Service** (`SecurityConfigMicroservice`)
   - Centralized security configuration
   - Authentication and authorization
   - Token management

## 🐳 Docker Configuration

### Microservice Dockerfiles
Each microservice includes Docker configuration:

```dockerfile
FROM openjdk:8
EXPOSE 8082
ADD target/[ServiceName]-0.0.1-SNAPSHOT.jar [ServiceName]-docker.jar
ENTRYPOINT["java","-jar","[ServiceName]-docker.jar"]
```

### Available Docker Services
- BarterResponseMS (Port 8082)
- ProductReviewsMS
- EventVenueMS

## 🚀 Development Setup

### Prerequisites
- Node.js 16+ and npm
- Java 8
- Maven 3.6+
- Docker (optional)

### Frontend Setup
```bash
cd Front
npm install
ng serve
```
Access at: http://localhost:4200

### Backend Setup
```bash
# Start Eureka Server first
cd Backend/Microservice\ Server
mvn spring-boot:run

# Start API Gateway
cd Backend/gatewayapi
mvn spring-boot:run

# Start other microservices
cd Backend/[Microservice-Name]
mvn spring-boot:run
```

### Docker Deployment
```bash
# Build and run microservices
cd Backend/[Microservice-Name]
mvn clean package
docker build -t [service-name] .
docker run -p [port]:[port] [service-name]
```

## 🔐 Security Features

- **OAuth2/OIDC**: Secure authentication
- **Spring Security**: Backend security
- **JWT Tokens**: Stateless authentication
- **CORS Configuration**: Cross-origin resource sharing
- **Role-based Access**: User authorization

## 📊 Database Configuration

### Development
- **H2 Database**: In-memory database for development
- **Auto-configuration**: Spring Boot auto-configuration

### Production
- **MySQL**: Production database
- **Connection Pooling**: Optimized database connections
- **Migration**: Database schema management

## 🔄 API Endpoints

### Gateway Routes
- `/api/barter/*` - Barter management
- `/api/events/*` - Event management
- `/api/venues/*` - Venue management
- `/api/products/*` - Product management
- `/api/reviews/*` - Review system
- `/api/announcements/*` - Announcement system

## 🧪 Testing

### Frontend Testing
```bash
cd Front
ng test
```

### Backend Testing
```bash
cd Backend/[Microservice-Name]
mvn test
```

## 📈 Monitoring & Health Checks

- **Spring Boot Actuator**: Health checks and metrics
- **Eureka Dashboard**: Service discovery monitoring
- **Application Metrics**: Performance monitoring

## 🔧 Configuration

### Environment Variables
- Database connections
- Service ports
- Security configurations
- OAuth2 client settings

### Application Properties
- Service discovery settings
- Database configurations
- Security settings
- Logging configurations

## 🚀 Deployment

### Production Deployment
1. Build all microservices
2. Create Docker images
3. Deploy to container orchestration platform
4. Configure load balancer
5. Set up monitoring and logging

### Cloud Deployment Options
- **Docker Swarm**: Container orchestration
- **Kubernetes**: Production-grade orchestration
- **AWS ECS**: Managed container service
- **Azure Container Instances**: Serverless containers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Note**: This is a comprehensive microservices-based barter application with modern web technologies, containerization support, and scalable architecture designed for production deployment. 