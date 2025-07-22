# Final Project – ADL Test Automation Engineer Course

---

This document describes the final project for the ADL Test Automation Engineer course, developed by:

- Leonel Briones Palacios
- Víctor Javier Vivas
- Rodrigo Quiróz

## API Overview

This project tests a RESTful API at:

**Base URL:**  
`https://api-tester-adl.leonardojose.dev`

**Full API documentation:**  
[Postman Documentation](https://documenter.getpostman.com/view/1142428/2sB34ijzCx#98724fd1-9c91-4294-b310-6c9dac5bb0cb)

## Test Scripts

All test scripts are created in Postman and should be exported in **Collection v2.1** format for compatibility with Newman (Postman's CLI runner).

### Exporting the Collection (v2.1 format)

![Export Example](./export_example.jpg)

## Running Tests with Newman

After exporting, run the collection with:

```bash
newman run <your_collection_file.json> \
    --environment <your_environment_file.json> \
    --reporters cli,html \
    --reporter-html-export report.html
```

**Example:**

```bash
newman run adl-final-project.postman_collection.json \
    --environment adl-env.postman_environment.json \
    --reporters cli,html \
    --reporter-html-export results/report.html
```

---
