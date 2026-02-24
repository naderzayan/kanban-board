import { Box, Typography } from "@mui/material";
import TaskCard from "./TaskCard";

export default function Column({ title, tasks, onDelete }) {
  return (
    <Box sx={{ width: 300, p: 2, bgcolor: "#f4f4f4", borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={onDelete} />
      ))}
    </Box>
  );
}