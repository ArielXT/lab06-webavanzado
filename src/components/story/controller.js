import { prisma } from "../../db";
// Listar
// METHOD: GET
export const index = async (req, res) => {
  try {
    const stories = await prisma.story.findMany();

    return res.status(200).json({
      ok: true,
      data: stories,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      data: error.message,
    });
  }
};

// Crear
// METHOD: POST
export const store = async (req, res) => {
  try {
    const stories = await  prisma.story.create({
      data: { ...req.body },
    });

    return res.status(201).json({
      ok: true,
      data: stories,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      data: error.message,
    });
  }
};

// Editar
// METHOD: PUT
export const edit = async (req, res) => {
  try {
    const { id } = req.params;

    const stories = await prisma.story.update({
      where: { id: Number(id) },
      data: { ...req.body },
    });

    return res.status(200).json({
      ok: true,
      data: stories,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      data: error.message,
    });
  }
};

// Eliminar
// METHOD: DELETE
export const kill = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.story.delete({
      where: { id: Number(id) },
    });
    return res.status(200).json({
      ok: true,
      data: "Story deleted",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      data: error.message,
    });
  }
};