using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoApi.Dtos.Tarefa
{
    public class UpdateTarefaRequestDto
    {
        [Required]
        [MinLength(3, ErrorMessage = "Digite pelo menos três caracteres")]
        public string titulo { get; set; } = string.Empty;
        public string descricao { get; set; } = string.Empty;
        public bool status { get; set; } = false;
    }
}