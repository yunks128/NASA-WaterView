### **Prerequisites**
- Node.js & Yarn
- Git
- Python (for API & backend integration)
- MPI (for RAPID model execution)
- Docker (for scalable cloud deployments)
- AWS CLI & Boto3 (for AWS-based cloud deployment)
- Terraform & Kubernetes (for infrastructure automation)

### **Setup Instructions**

#### **1. Setting up the Docusaurus Website**
```sh
npx create-docusaurus@latest NASA-WaterView classic
cd NASA-WaterView
yarn install
yarn start
```

To deploy a static site:
```sh
yarn build
```

#### **2. Installing RAPID on AWS Cloud**

##### **Step 1: Set up AWS Infrastructure**
```sh
aws configure
terraform init
terraform apply -auto-approve
```

##### **Step 2: Deploy RAPID Docker Containers**
```sh
docker build -t rapid-hydro .
docker tag rapid-hydro <aws_account_id>.dkr.ecr.<region>.amazonaws.com/rapid-hydro
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
aws ecr create-repository --repository-name rapid-hydro

docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/rapid-hydro
```

##### **Step 3: Deploy Kubernetes Cluster on AWS EKS**
```sh
kubectl apply -f k8s/eks-deployment.yaml
```

##### **Step 4: Run RAPID Hydrologic Simulations**
```sh
kubectl exec -it <rapid-pod-name> -- python3 rapid-main/drv/drv_MERIT_Hydro_v07_Basins_v01_GLDAS_v20.py
```
