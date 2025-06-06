# Cache Handler + Redis + LRU

## Getting Started

### First time only

```bash
npm i
```

### Run dev server
```bash
npm run dev
```

### Run a production build

```bash
npm build
npm run start
```

## Load Balancing (Docker + Redis + Nginx)

### Run in docker with load balancer

```bash
docker compose up --build
```

```bash
http://localhost:3380/static
```

### Feature branches

- Each new feature should reside in its own branch.
- Feature branches use develop as their parent branch.
- When a feature is complete, it gets merged back into develop.
- Features should never interact directly with master.
