# Data Access for WaterView

## Overview
WaterView provides access to a variety of hydrologic data sources, including real-time and historical datasets. These datasets support hydrologic modeling, flood forecasting, and water resource management.

## Available Data Sources

### **1. HydroGlobe**
- Provides global-scale water storage and flux data.
- Supports analysis of hydrologic cycle components.
- Data format: NetCDF, GeoTIFF
- Access: [HydroGlobe API](/docs/api-reference)

### **2. RiverView**
- Contains river discharge and storage data for major global river basins.
- Used for streamflow predictions and hydrologic risk assessments.
- Data format: CSV, NetCDF
- Access: [RiverView API](/docs/api-reference)

### **3. NLDAS-3**
- North American Land Data Assimilation System.
- Provides high-resolution land surface modeling data.
- Data format: GRIB, HDF5
- Access: [NLDAS-3 Portal](https://ldas.gsfc.nasa.gov/nldas)

### **4. VEDA Visualization Platform**
- Offers interactive tools for viewing and analyzing hydrologic datasets.
- Provides mapping and charting capabilities.
- Access: [VEDA Platform](https://earthdata.nasa.gov/veda)

### **5. RAPID Model Data**
- Hydrologic routing model outputs.
- Supports integration with MERIT Hydro and GLDAS.
- Access: [RAPID Model API](/docs/api-reference)

## How to Access Data

### **API Access**
All WaterView datasets can be accessed via RESTful APIs. Users can authenticate and retrieve data using API keys.

#### Example API Request
```bash
curl -X GET "https://api.waterview.nasa.gov/data/hydroglobe" -H "Authorization: Bearer YOUR_API_KEY"
```

### **Download Options**
- **Bulk Downloads:** Available via FTP or cloud storage.
- **Streaming Services:** Real-time data streams for specific use cases.

### **Data Licensing & Use**
WaterView data is provided under NASA’s Open Science policy. Users must comply with data attribution guidelines.

For more details, refer to the [Terms of Use](/docs/terms).

## Support & Contact
For questions regarding data access, contact **support@waterview.nasa.gov** or visit the [WaterView Help Center](/docs/help-center).
