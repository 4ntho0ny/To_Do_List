using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoApi.Models
{
    public class Tarefa
    {
        public long id { get; set; }
        public string titulo { get; set; } = string.Empty;
        public string descricao { get; set; } = string.Empty;
        public bool status { get; set; } = false;
    }
}