import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../api/tasksApi";

export const useTasks = () => {
  const queryClient = useQueryClient();

  const tasksQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: api.getTasks,
  });

  const createMutation = useMutation({
    mutationFn: api.createTask,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => api.updateTask(id, data),
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  const deleteMutation = useMutation({
    mutationFn: api.deleteTask,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  return {
    ...tasksQuery,
    createTask: createMutation.mutate,
    updateTask: updateMutation.mutate,
    deleteTask: deleteMutation.mutate,
  };
};