"use client";

import { useState, useMemo, useEffect } from "react";
import { Icon } from "@iconify/react";
import { CATEGORIES } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { getProjects, createProject, updateProject, deleteProject as deleteProjectAction } from "@/lib/actions/projects";

export const ProjectTable = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Tous");
  const [loading, setLoading] = useState(true);
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const fetchProjects = async () => {
    setLoading(true);
    const data = await getProjects();
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        project.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = categoryFilter === "Tous" || project.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [projects, searchTerm, categoryFilter]);

  const handleEdit = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (project: any) => {
    setSelectedProject(project);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedProject) {
      await deleteProjectAction(selectedProject.id);
      setIsDeleteModalOpen(false);
      fetchProjects();
    }
  };

  const handleSaveProject = async (data: any) => {
    // Basic slug generation if not provided
    if (!data.slug) {
      data.slug = data.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    }
    
    if (selectedProject) {
      await updateProject(selectedProject.id, data);
    } else {
      await createProject(data);
    }
    setIsModalOpen(false);
    fetchProjects();
  };

  return (
    <div className="space-y-6">
      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Icon 
            icon="solar:magnifer-line-duotone" 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 text-xl" 
          />
          <input
            type="text"
            placeholder="Rechercher un projet ou lieu..."
            className="w-full bg-background rounded-2xl pl-12 pr-6 py-3.5 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <select
            className="flex-1 md:w-64 bg-background rounded-2xl px-6 py-3.5 outline-none border border-foreground/10 focus:border-primary transition-colors text-foreground shadow-sm appearance-none cursor-pointer"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          
          <button 
            onClick={handleAddNew}
            className="bg-primary text-background px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
          >
            <Icon icon="solar:add-circle-bold-duotone" className="text-xl" />
            Nouveau Projet
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="bg-background rounded-[2.5rem] border border-foreground/5 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/5">
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider whitespace-nowrap">Projet</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">Catégorie</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">Lieu</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider">Date</th>
                <th className="px-6 py-5 text-xs font-bold text-foreground/50 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <tr key={project.id} className="group hover:bg-foreground/5 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-foreground/5">
                          <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-semibold text-foreground truncate max-w-[250px]">{project.title}</span>
                          <span className="text-xs text-foreground/50 truncate max-w-[250px]">{project.short_description}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                        {project.category}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-foreground/70">{project.location}</td>
                    <td className="px-6 py-5 text-sm text-foreground/70 whitespace-nowrap">{project.date_string}</td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 rounded-xl bg-foreground/5 text-foreground/50 hover:text-primary transition-colors">
                          <Icon icon="solar:eye-bold-duotone" className="text-xl" />
                        </button>
                        <button 
                          onClick={() => handleEdit(project)}
                          className="p-2 rounded-xl bg-foreground/5 text-foreground/50 hover:text-amber-500 transition-colors"
                        >
                          <Icon icon="solar:pen-new-square-bold-duotone" className="text-xl" />
                        </button>
                        <button 
                          onClick={() => handleDeleteClick(project)}
                          className="p-2 rounded-xl bg-foreground/5 text-foreground/50 hover:text-red-500 transition-colors"
                        >
                          <Icon icon="solar:trash-bin-trash-bold-duotone" className="text-xl" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-foreground/30 font-medium">
                    {loading ? (
                      <div className="flex flex-col items-center gap-4">
                        <Icon icon="solar:refresh-bold-duotone" className="text-4xl animate-spin" />
                        Chargement des projets...
                      </div>
                    ) : (
                      "Aucun projet trouvé pour vos critères de recherche."
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination Placeholder */}
      <div className="flex items-center justify-between px-6 pt-2">
        <p className="text-sm text-foreground/50">
          Affichage de <span className="font-bold">{filteredProjects.length}</span> résultats
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-xl bg-foreground/5 text-foreground/30 text-sm font-bold cursor-not-allowed">Précédent</button>
          <button className="px-4 py-2 rounded-xl bg-foreground/10 text-foreground/70 text-sm font-bold hover:bg-foreground/20 transition-all">Suivant</button>
        </div>
      </div>

      {/* Modals */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject}
        onSave={handleSaveProject}
      />

      <DeleteConfirmationModal 
        isOpen={isDeleteModalOpen} 
        onClose={() => setIsDeleteModalOpen(false)} 
        onConfirm={handleConfirmDelete}
        title={selectedProject?.title}
      />
    </div>
  );
};
