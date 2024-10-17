const express = require('express');
const app = express();
const schedulerRoutes = require('./routes/schedulerRoutes');

app.use(express.json());
app.use('/api/scheduler', schedulerRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
