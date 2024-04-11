using SymbolicAnalysis
using Symbolics, SymbolicAnalysis.LogExpFunctions
using Symbolics: unwrap
using LinearAlgebra

@syms x y
ex1 = exp(x^2) - log(x) |> unwrap
ex1 = propagate_curvature(propagate_sign(ex1))

@test getcurvature(ex1) == SymbolicAnalysis.Vex
@test getsign(ex1) == SymbolicAnalysis.AnySign

ex2 = -sqrt(x^2)
ex2 = propagate_curvature(propagate_sign(ex2))

@test getcurvature(ex2) == SymbolicAnalysis.UnknownCurvature
@test getsign(ex2) == SymbolicAnalysis.Negative

# ex2 = -2*norm([1,x]) - x*(x-3) + y
# ex2 = propagate_curvature(propagate_sign(ex2))
# getcurvature(ex2)
# getsign(ex2)


ex = -1*xlogx(x)
ex = propagate_curvature(propagate_sign(ex))
@test getcurvature(ex) == SymbolicAnalysis.Cave
@test getsign(ex) == SymbolicAnalysis.AnySign

ex = 2*abs(x) -1
ex = propagate_curvature(propagate_sign(ex))
@test getcurvature(ex) == SymbolicAnalysis.Vex
@test getsign(ex) == SymbolicAnalysis.AnySign

ex = abs(x)^2
ex = propagate_curvature(propagate_sign(ex))
@test getcurvature(ex) == SymbolicAnalysis.Vex
@test getsign(ex) == SymbolicAnalysis.Positive

ex = abs(x)^2 + abs(x)^3
ex = propagate_curvature(propagate_sign(ex))
@test getcurvature(ex) == SymbolicAnalysis.Vex
@test getsign(ex) == SymbolicAnalysis.Positive

@variables x[1:3] y
ex = x .- y
ex = propagate_curvature(propagate_sign(ex))
@test getcurvature(ex) == SymbolicAnalysis.Affine
@test getsign(ex) == SymbolicAnalysis.Positive

ex = exp.(x) |> unwrap
ex = propagate_curvature(propagate_sign(ex))
@test getcurvature(ex) == SymbolicAnalysis.Vex
@test getsign(ex) == SymbolicAnalysis.Positive

##vector * scalar gets simplified

@syms x y z
obj = x^2 + y^2 + z^2

ex = propagate_curvature(propagate_sign(obj))
@test getcurvature(ex) == SymbolicAnalysis.Vex

cons = [
    x + y + z ~ 10
    log1p(x)^2 - log1p(z) ≲ 0
]

ex = propagate_curvature(propagate_sign(cons[1].lhs))
@test getcurvature(ex) == SymbolicAnalysis.Affine

ex = propagate_curvature(propagate_sign(cons[2].lhs))
@test getcurvature(ex) == SymbolicAnalysis.Vex

@variables x y z

ex = SymbolicAnalysis.quad_over_lin(x - y, 1 - max(x, y)) |> unwrap
ex = propagate_curvature(propagate_sign(ex))
@test getcurvature(ex) == SymbolicAnalysis.Vex
