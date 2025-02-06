## **API Reference**

### **Core API Endpoints**
- `/data/hydroglobe` - Fetch HydroGlobe data
- `/data/nldas3` - Retrieve NLDAS-3 models
- `/data/riverview` - Get RiverView statistics
- `/visualize/veda` - Integrate with VEDA visualization tools
- `/data/rapid` - Retrieve RAPID simulation results

```mermaid
graph TD;
  A[User Request] -->|API Call| B[Data Processing]
  B -->|Model Query| C[NASA WaterView Engine]
  C -->|Response| D[Client Application]
  C -->|Hydrologic Model Execution| E[RAPID Engine]
```