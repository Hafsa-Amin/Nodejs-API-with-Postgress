const models = require("../database/models");
const Movie = models.Movie

exports.create = async (req, res) => {
    try {
        const { name, duration, rating } = req.body;
        const movie = await Movie.create({
        name,
        duration,
        rating,
        });
      res.status(200).send({
        movie,
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message || "internal server error",
      });
    }
  }

exports.delete = async  (req, res) => {
    try{
        const id = req.params.id;
        await Movie.destroy({
        where: { id: id }
        })
        res.status(200).send({message: "Movie was deleted successfully!"});
    } catch (error) {
        return res.status(500).send({
        message: error.message || "internal server error",
        });
    }
  };

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, duration, rating } = req.body;
        const movie = await Movie.findByPk(id);
        if (!movie) {
          return res.status(403).send({
            message: "No movie registered with this id",
          });
        }
        const updatePayload = {};
        if (name) {
          updatePayload.name = name;
        }
        if (duration) {
          updatePayload.duration = duration;
        }
        if (rating) {
          updatePayload.rating = rating;
        }
        await Movie.update(updatePayload, { where: { id: id } })
        res.status(200).send({message: "Movie was updated successfully."})
    } catch (error) {
        return res.status(500).send({
        message: error.message || "internal server error",
        });
    }
  };

exports.getMovies = async (req, res)=> {
    try {
        let movies = await Movie.findAll()
        res.send(movies).status(200)
      } catch (err) {
            res.status(400).send(err)
            throw err;
      }
  }

exports.findById = async (req, res)=> {
    try {
        const movie= await Movie.findByPk(req.params.id)
        res.send(movie).status(200)
      } catch (err) {
        res.status(400).send(err)
        throw err;
      }
  }